type TaskProps =  {
    title: string;
    description?: string;
    dueDate?: Date;
    status?: string; // "pending" | "completed" | etc.
    category?: string;
    review?: string; // "high" | "medium" | "low" | etc.
}