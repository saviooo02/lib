"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface CreateSemesterDialogProps {
  readonly onCreate?: (name: string) => void;
  readonly open?: boolean;
  readonly onOpenChange?: (open: boolean) => void;
}

export function CreateSemesterDialog({
  onCreate,
  open: controlledOpen,
  onOpenChange,
}: CreateSemesterDialogProps) {
  const [semesterName, setSemesterName] = useState("");
  const [open, setOpen] = useState(false);

  // determine whether the component is controlled or uncontrolled
  const isControlled =
    controlledOpen !== undefined && onOpenChange !== undefined;

  // select appropriate state handlers
  let dialogOpen = open;
  let setDialogOpen: (open: boolean) => void = setOpen;
  if (
    isControlled &&
    controlledOpen !== undefined &&
    onOpenChange !== undefined
  ) {
    dialogOpen = controlledOpen;
    setDialogOpen = onOpenChange;
  }

  const handleCreate = () => {
    if (!semesterName.trim()) return;

    onCreate?.(semesterName);
    setSemesterName("");
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Semester</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="semester-name">Semester Name</Label>
            <Input
              id="semester-name"
              placeholder="e.g. Semester 1"
              value={semesterName}
              onChange={(e) => setSemesterName(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleCreate}
            disabled={!semesterName.trim()}
            className="w-full sm:w-auto"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
