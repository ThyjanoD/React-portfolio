import { getCustom } from "./client";

export interface SiteOptions {
    job_status: {
        value: "available" | "employed" | "freelance" | "unavailable";
        label: string;
    };

    job: {
        company_name: string;
        company_content: string;

        tasks: {
            value: string;
            label: string;
        }[];

        date: string;

        preview: {
            title: string;
            url: string;
            target: string;
        };

        image: {
            id: number;
            url: string;
            alt: string;
        };
    }[];

    instagram: {
        title: string;
        url: string;
        target: string;
    },

    linkedin: {
        title: string;
        url: string;
        target: string;
    },

    phone_number: {
        title: string;
        url: string;
        target: string;
    },

    email: {
        title: string;
        url: string;
        target: string;
    },
}

export async function getSiteOptions(): Promise<SiteOptions> {
    return getCustom<SiteOptions>("/portfolio/v1/options");
}