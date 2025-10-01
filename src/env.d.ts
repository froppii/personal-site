declare global {
  interface Window {
    CustomSubstackWidget?: {
      substackUrl: string;
      placeholder?: string;
      buttonText?: string;
      theme?: string;
    };
  }
}

export {};
