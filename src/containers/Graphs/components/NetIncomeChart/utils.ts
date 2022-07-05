export const getQuarter = (date: string) => `Q${Math.floor(new Date(date).getMonth() / 3 + 1)}`;

export const getYear = (date: string) => new Date(date).getFullYear();
