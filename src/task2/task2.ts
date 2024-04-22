import { Observable } from "./observable";
import { ToastProps } from "./Toast";

type Events = {
  type: "ADD-TOAST" | "REMOVE-ALL";
  toast?: Pick<ToastProps, "id" | "message" | "variant">;
};


export const observable = new Observable<Events>();
observable.subscribe((data) => {});

export function toast(message: string) {
  observable.notify({
    type: "ADD-TOAST",
    toast: { id: Math.random(), message },
  });
}

toast.error = (message: string) => {
  observable.notify({
    type: "ADD-TOAST",
    toast: { id: Math.random(), message, variant: "error" },
  });
};

toast.success = (message: string) => {
  observable.notify({
    type: "ADD-TOAST",
    toast: { id: Math.random(), message, variant: "success" },
  });
};

toast.dismissAll = () => {
  observable.notify({ type: "REMOVE-ALL" });
};
