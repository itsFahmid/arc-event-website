"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import {
  PageHeader,
  DataTable,
  CreateEditDialog,
  useAdminData,
  useAdminDialog,
  FormField,
  SelectField,
} from "@/components/SharedAdminPanel";
import type { TableColumn } from "@/components/SharedAdminPanel/types/admin";

interface Sponsor {
  id: number;
  name: string;
  description?: string;
  category?: string;
  logoUrl?: string;
  websiteUrl?: string;
  createdAt: string;
}

export default function AdminSponsorsPage() {
  const { data: session, status } = useSession();
  const [isClient, setIsClient] = useState(false);

  const {
    data: sponsors,
    loading,
    tableState,
    setPage,
    search,
    refetch,
    createItem,
    updateItem,
    deleteItem,
  } = useAdminData<Sponsor>({
    endpoint: "/api/admin/sponsors",
    pageSize: 10,
  });

  const dialog = useAdminDialog();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/login";
    }
  }, [status]);

  const columns: TableColumn<Sponsor>[] = [
    {
      key: "name",
      label: "Name",
      width: "200px",
    },
    {
      key: "category",
      label: "Category",
      width: "150px",
      render: (value) => value || "—",
    },
    {
      key: "description",
      label: "Description",
      width: "250px",
      render: (value) => {
        if (!value) return "—";
        return value.length > 50 ? `${value.substring(0, 50)}...` : value;
      },
    },
    {
      key: "createdAt",
      label: "Created",
      width: "150px",
      render: (value) => new Date(value).toLocaleDateString(),
    },
  ];

  const handleCreate = async (formData: any) => {
    try {
      await createItem(formData);
      dialog.close();
      toast.success("Sponsor created successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to create sponsor";
      toast.error(message);
    }
  };

  const handleEdit = (sponsor: Sponsor) => {
    dialog.open("edit", sponsor);
  };

  const handleUpdate = async (formData: any) => {
    if (!dialog.data?.id) return;
    try {
      await updateItem(dialog.data.id, formData);
      dialog.close();
      toast.success("Sponsor updated successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update sponsor";
      toast.error(message);
    }
  };

  const handleDelete = async (sponsor: Sponsor) => {
    try {
      await deleteItem(sponsor.id);
      toast.success("Sponsor deleted successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to delete sponsor";
      toast.error(message);
    }
  };

  const handleDialogSubmit = async (formData: any) => {
    if (dialog.mode === "create") {
      await handleCreate(formData);
    } else {
      await handleUpdate(formData);
    }
  };

  if (!isClient) return null;
  if (status === "loading") return <div className="p-8">Loading...</div>;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Sponsors"
        subtitle={`Manage ${sponsors.length} sponsors`}
        showSearch
        searchPlaceholder="Search sponsors..."
        onSearch={search}
        actionButton={{
          label: "Add Sponsor",
          onClick: () => dialog.open("create"),
        }}
      />

      <DataTable<Sponsor>
        columns={columns}
        data={sponsors}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        pagination={{
          page: tableState.page,
          limit: tableState.limit,
          total: 0, // Update with actual total from useAdminData
          totalPages: 0,
        }}
        onPageChange={setPage}
      />

      <CreateEditDialog
        isOpen={dialog.isOpen}
        mode={dialog.mode}
        title={dialog.mode === "create" ? "Create Sponsor" : "Edit Sponsor"}
        onSubmit={handleDialogSubmit}
        onOpenChange={(open) => !open && dialog.close()}
        fields={[
          {
            name: "name",
            label: "Sponsor Name",
            type: "text",
            required: true,
            defaultValue: dialog.data?.name,
          },
          {
            name: "category",
            label: "Category",
            type: "select",
            options: [
              { label: "Platinum", value: "platinum" },
              { label: "Gold", value: "gold" },
              { label: "Silver", value: "silver" },
              { label: "Bronze", value: "bronze" },
            ],
            defaultValue: dialog.data?.category,
          },
          {
            name: "description",
            label: "Description",
            type: "textarea",
            defaultValue: dialog.data?.description,
          },
          {
            name: "websiteUrl",
            label: "Website URL",
            type: "url",
            defaultValue: dialog.data?.websiteUrl,
          },
          {
            name: "logoUrl",
            label: "Logo URL",
            type: "url",
            defaultValue: dialog.data?.logoUrl,
          },
        ]}
      />
    </div>
  );
}
