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

export interface PageComponentsPageSections extends Struct.ComponentSchema {
  collectionName: 'components_page_components_page_sections';
  info: {
    displayName: 'Page_Sections';
    icon: 'layer';
  };
  attributes: {
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

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'cta.call-outs': CtaCallOuts;
      'page-components.page-sections': PageComponentsPageSections;
      'persistant-components.footer': PersistantComponentsFooter;
    }
  }
}
