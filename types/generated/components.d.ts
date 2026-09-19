import type { Schema, Struct } from '@strapi/strapi';

export interface CtaCallOuts extends Struct.ComponentSchema {
  collectionName: 'components_cta_call_outs';
  info: {
    displayName: 'Call_Outs';
    icon: 'volumeUp';
  };
  attributes: {
    CTA_Content: Schema.Attribute.Blocks;
  };
}

export interface LinkComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_link_component_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    Link_Title: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface PageComponentsPageSections extends Struct.ComponentSchema {
  collectionName: 'components_page_components_page_sections';
  info: {
    displayName: 'Page_Sections';
    icon: 'layer';
  };
  attributes: {
    List_of_products: Schema.Attribute.Component<
      'products-componet.products',
      true
    >;
    Page_link: Schema.Attribute.Component<'link-component.link', false>;
    Page_Section_Content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Page_Section_Media_Content: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PersistantComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_persistant_components_footers';
  info: {
    displayName: 'Footer';
    icon: 'layout';
  };
  attributes: {
    Footer_Content: Schema.Attribute.Blocks;
    Footer_Logo: Schema.Attribute.Media<'images'>;
  };
}

export interface ProductsComponetProducts extends Struct.ComponentSchema {
  collectionName: 'components_products_componet_products';
  info: {
    displayName: 'Products';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Required;
    is_sale: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    product_desc: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'""'>;
    product_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    product_name: Schema.Attribute.String & Schema.Attribute.Required;
    product_price: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'cta.call-outs': CtaCallOuts;
      'link-component.link': LinkComponentLink;
      'page-components.page-sections': PageComponentsPageSections;
      'persistant-components.footer': PersistantComponentsFooter;
      'products-componet.products': ProductsComponetProducts;
    }
  }
}
