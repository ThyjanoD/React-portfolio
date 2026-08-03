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
        skills_outro: string;
    
        skills_cv_download: {
            title: string;
            url: string;
            target: string;
        };
    
        skill: {
            skill_title: string;
            skill_content: string;
        }[];
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

export interface AboutPage{
  id: number;
  slug: string

  acf: {
    about_hero: {
      about_hero_title: string,
      about_hero_image: number,
    };

    full_width_text: {
      fw_title: string,
      fw_content: string,
    };

    about_motivation: {
      about_motivation_title: string;
      motivations: {
        motivation_title: string;
        motivation_content: string;
      }[];
    };

    about_experience: {
      about_experience_title: string;
    
      download_cv: {
        title: string;
        url: string;
        target: string;
      };
    
      work_experience: {
        employment_date: string;
        employer_position: string;
        work_tasks: string[];
      }[];
    };
  };
}