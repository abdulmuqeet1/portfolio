export {}

declare global {
    export interface IIndexable {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any
    }

    export type AvailableTextTypography =
        | "h1"
        | "h2"
        | "h3"
        | "p:round"
        | "p:round-onboarding-responsive"
        | "3xl"
        | "small-error"
        | "small-hint"
    export type AvailableTextSizes =
        | "xl"
        | "lg"
        | "md"
        | "small"
        | "xs"
        | "onboarding-responsive"
        | "xs-medium"
        | "xs-small"
        | "xs-extra-small"
        | "sm-medium"

    export type TAsinProductColor = {
        default: string //600
        hover: string //700
        active: string //300
        inActive: string //500
        bgHundred: string //100
        // primary: string //  500
        // light: string //  300
        // accent: string // 900 background
        // badge: string // 100
        // hover: string // 700
        // disabled?: string //600
        // extralight: string //200
    }

    export type ProductViewType =
        | "main_image"
        | "price"
        | "carousel_images"
        | "title"
        | "videos"
        | "bullets"
        | "description"
        | "actual_asin"
        | "seller_info"
        | "stock"
        | "availability"
        | "main_video"
    // | "keywords"

    export type WarningType = "actual_asin" | "bsr_large" | "bsr_small" | "ratings_count" | "rating" | "success"
    export interface IEnvironmentVariable extends NodeJS.ProcessEnv {
        REACT_APP_API_URL: string
        REACT_APP_BASE_URL: string
        REACT_APP_ROUTE_TYPE: "production" | "staging"
    }
}
