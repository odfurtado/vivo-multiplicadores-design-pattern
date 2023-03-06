export type Order = {
  id: string;
  type: 'Venda' | 'Reembolso';
  items?: OrderItem[];
};

export type OrderItem = {
  description: string;
  value: number;
};
