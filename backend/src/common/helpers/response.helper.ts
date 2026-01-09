export class ApiResponse {
  static success(message: string, data: any = null) {
    return {
      success: true,
      message,
      data,
    };
  }

  static error(message: string, status: number) {
    return {
      success: false,
      message,
      status,
    };
  }
}
