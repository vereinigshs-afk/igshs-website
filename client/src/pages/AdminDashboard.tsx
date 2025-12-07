import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Clock, Users } from "lucide-react";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

type MembershipApplication = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  processedAt: Date | null;
};

export default function AdminDashboard() {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedApplication, setSelectedApplication] =
    useState<MembershipApplication | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const utils = trpc.useUtils();
  const { data: applications, isLoading } = trpc.membership.list.useQuery();

  const updateStatusMutation = trpc.membership.updateStatus.useMutation({
    onSuccess: () => {
      utils.membership.list.invalidate();
      toast.success("Status erfolgreich aktualisiert");
      setIsDialogOpen(false);
      setSelectedApplication(null);
    },
    onError: (error) => {
      toast.error(`Fehler: ${error.message}`);
    },
  });

  const filteredApplications = applications?.filter((app) => {
    if (statusFilter === "all") return true;
    return app.status === statusFilter;
  });

  const stats = {
    total: applications?.length || 0,
    pending: applications?.filter((a) => a.status === "pending").length || 0,
    approved: applications?.filter((a) => a.status === "approved").length || 0,
    rejected: applications?.filter((a) => a.status === "rejected").length || 0,
  };

  const handleStatusChange = (
    application: MembershipApplication,
    newStatus: "pending" | "approved" | "rejected"
  ) => {
    updateStatusMutation.mutate({
      id: application.id,
      status: newStatus,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
            <Clock className="h-3 w-3 mr-1" />
            Ausstehend
          </Badge>
        );
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Genehmigt
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">
            <XCircle className="h-3 w-3 mr-1" />
            Abgelehnt
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Mitgliederverwaltung
          </h1>
          <p className="text-muted-foreground mt-2">
            Verwalten Sie Mitgliedschafts-Anmeldungen und ändern Sie deren
            Status.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Gesamt
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Ausstehend
              </CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pending}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Genehmigt
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.approved}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Abgelehnt
              </CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.rejected}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Status filtern:</label>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle</SelectItem>
              <SelectItem value="pending">Ausstehend</SelectItem>
              <SelectItem value="approved">Genehmigt</SelectItem>
              <SelectItem value="rejected">Abgelehnt</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-8 text-center text-muted-foreground">
                Lädt...
              </div>
            ) : filteredApplications && filteredApplications.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Adresse</TableHead>
                    <TableHead>Eingereicht am</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">
                        {application.firstName} {application.lastName}
                      </TableCell>
                      <TableCell>{application.email}</TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {application.address}
                      </TableCell>
                      <TableCell>
                        {new Date(application.createdAt).toLocaleDateString(
                          "de-CH"
                        )}
                      </TableCell>
                      <TableCell>{getStatusBadge(application.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedApplication(application);
                            setIsDialogOpen(true);
                          }}
                        >
                          Bearbeiten
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                Keine Anmeldungen gefunden.
              </div>
            )}
          </CardContent>
        </Card>

        {/* Status Change Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Status ändern</DialogTitle>
              <DialogDescription>
                Ändern Sie den Status der Mitgliedschafts-Anmeldung von{" "}
                {selectedApplication?.firstName} {selectedApplication?.lastName}
              </DialogDescription>
            </DialogHeader>

            {selectedApplication && (
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Aktueller Status:</p>
                  {getStatusBadge(selectedApplication.status)}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Neuer Status:</p>
                  <div className="flex gap-2">
                    <Button
                      variant={
                        selectedApplication.status === "approved"
                          ? "default"
                          : "outline"
                      }
                      className="flex-1"
                      onClick={() =>
                        handleStatusChange(selectedApplication, "approved")
                      }
                      disabled={updateStatusMutation.isPending}
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Genehmigen
                    </Button>
                    <Button
                      variant={
                        selectedApplication.status === "rejected"
                          ? "destructive"
                          : "outline"
                      }
                      className="flex-1"
                      onClick={() =>
                        handleStatusChange(selectedApplication, "rejected")
                      }
                      disabled={updateStatusMutation.isPending}
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Ablehnen
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsDialogOpen(false);
                  setSelectedApplication(null);
                }}
              >
                Schliessen
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
