export type Product = {
    dimension: {
      height: number;
      width: number;
      length: number;
    };
    _id: string;
    name: string;
    slug: string;
    image_urls: string[];
    tags: string[];
    description: string;
    short_description: string;
    price: number | null;
    slash_price: number;
    min_delivery_estimation: number;
    max_delivery_estimation: number;
    sku: string;
    category: string;
    is_forsale: boolean;
    is_approved: boolean;
    warehouse_id: string;
    product_unit_id: string;
    created_by: {
      user_id: string;
      name: string;
      type: string;
    };
    weight: number;
    metadata: {
      product_unit: {
        _id: string;
        name: string;
        unit_value: number;
        unit_value_conversion: number;
        description: string;
        status: string;
        created_by: {
          user_id: string;
          name: string;
          type: string;
        };
        created_at: string;
        updated_at: string;
        __v: number;
        updated_by: {
          user_id: string;
          name: string;
          type: string;
        };
      };
      product_variant: {
        _id: string;
        __v: number;
        created_at: string;
        created_by: {
          user_id: string;
          name: string;
          type: string;
        };
        description: string;
        image_urls: string[];
        name: string;
        price: number;
        product_id: string;
        slash_price: number;
        stock: number;
        type: string;
        type_value: string;
        updated_at: string;
        warehouse_id: string;
        short_description: string;
      }[];
      warehouse: {
        _id: string;
        user_id: string;
        code: string;
        name: string;
        pic_name: string;
        email: string;
        address: string;
        whatsapp_number: string;
        created_by: {
          user_id: string;
          name: string;
          type: string;
        };
        created_at: string;
        updated_at: string;
        __v: number;
      };
      company_brand: {
        _id: string;
        name: string;
        image_url: string;
        minimal_order: number;
        created_by: {
          user_id: string;
          name: string;
          type: string;
        };
        created_at: string;
        updated_at: string;
        slug: string;
        __v: number;
      };
    };
    created_at: string;
    updated_at: string;
    __v: number;
    stock: number;
    updated_by: {
      user_id: string;
      name: string;
      type: string;
    };
    company_brand_id: string;
    is_wishlist: boolean;
    price_range: {
      min: number;
      max: number;
      min_slash: number;
      max_slash: number;
    };
  };