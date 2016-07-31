import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { SHARED_PROVIDERS } from "../app/shared";

export const PROVIDERS = [
    ...HTTP_PROVIDERS,
    ...SHARED_PROVIDERS,

    disableDeprecatedForms(),
    provideForms()
];
