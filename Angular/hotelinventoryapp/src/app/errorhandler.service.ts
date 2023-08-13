import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        console.log("Global error handler called");
        console.log(error);
    }
}