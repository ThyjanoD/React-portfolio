export interface HomePage {
    id: number;
    slug: string;
  
    title: {
      rendered: string;
    };
  
    acf: {
      hero: {
        hero_title: string;
        hero_image: number;
      };
  
      about: {
        title: string;
        content: string;
        image: number;
      };
  
      skills: {
        skills_title: string;
        skills_content: string;
      };
    };
  }

export interface WorkPage {
  id: number;
  slug: string;

  acf: {
    work_hero: {
      work_hero_title: string;
    };

    work_about: {
      work_about_title: string;
      work_about_content: string;
    };
  };
}