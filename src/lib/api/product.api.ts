export const FetchTopProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products?sort=-sold`
  );
  const data = await res.json();
  const response: Product[] = data.products;
  return response;
};
export const FetchTopRatingProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products?sort=rateAvg`
  );
  const data = await res.json();
  const response: Product[] = data.products;
  return response;
};

export const FetchProduct = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products/${id}`
  );
  const data = await res.json();
  const response: Product = data.product;
  return response;
};
export const FetchALLProducts = async (params: {
  category?: string | string[];
  rateAvg?: string | string[];
}) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products`);

  const appendParams = (key: string, value?: string | string[]) => {
    if (!value) return;
    (Array.isArray(value) ? value : [value]).forEach((v) => {
      url.searchParams.append(key, v);
    });
  };

  appendParams("category", params.category);
  appendParams("rateAvg", params.rateAvg);

  const res = await fetch(url);
  const data = await res.json();
  return data.products as Product[];
};

export const FetchALLProductsInCategory = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products?category=${id}`
  );
  const data = await res.json();
  const response: Product[] = data.products;
  return response;
};
