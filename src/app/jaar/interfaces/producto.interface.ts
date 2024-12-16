export interface Products {
    ProductAll: ProductAll[];
  }
  export interface ProductAll {
    pro_id:       string;
    pro_nombre:   string;
    pro_marca:    string;
    pro_precio:   number;
    pro_talla:    number;
    pro_cantidad: number;
    pro_color:    string;
    pro_estado:   boolean;
    pro_seccion:  string;
  }