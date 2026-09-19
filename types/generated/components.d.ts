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

export interface MenuNavigationLinksNavlinks extends Struct.ComponentSchema {
  collectionName: 'components_menu_navigation_links_navlinks';
  info: {
    displayName: 'navlinks';
  };
  attributes: {
    external: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    menu_name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageComponentsPageSections extends Struct.ComponentSchema {
  collectionName: 'components_page_components_page_sections';
  info: {
    displayName: 'Page_Sections';
    icon: 'layer';
  };
  attributes: {
    Page_link: Schema.Attribute.Component<'link-component.link', false>;
    Page_Section_Content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Page_Section_Media_Content: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'cta.call-outs': CtaCallOuts;
      'link-component.link': LinkComponentLink;
      'menu-navigation-links.navlinks': MenuNavigationLinksNavlinks;
      'page-components.page-sections': PageComponentsPageSections;
    }
  }
}
