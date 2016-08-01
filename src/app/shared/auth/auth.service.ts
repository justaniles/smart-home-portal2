import localStorage = require("local-storage");
import { Injectable } from "@angular/core";
import { PcDiagnostics } from "../pc-portal";

const AUTH_TOKEN_KEY = "pancake-auth-token";

/**
 * User's auth token that is saved in local storage.
 */
interface StoredAuthToken {
    email: string;
    token: string;
}

@Injectable()
export class AuthService {

    constructor() {
    }

    /**
     * Gets the auth information currently stored in local storage.
     * @returns {StoredAuthToken} Object containing the user's email and auth token, or null if
     *      no auth information is found.
     */
    get authInfo(): StoredAuthToken {
        let storedAuthToken: StoredAuthToken = localStorage.get(AUTH_TOKEN_KEY);
        if (!storedAuthToken) {
            return null;
        }

        return storedAuthToken;
    }

    /**
     * Stores a user's auth token in local memory.
     * NOTE: Calling this function multiple times will overwrite each previous entry.
     * @param email - The user's email
     * @param token - The user's auth token
     */
    storeAuthToken(email: string, token: string): void {
        const authTokenToStore: StoredAuthToken = {
            email: email,
            token: token
        };
        this._storeAuthToken(authTokenToStore);
    }

    /**
     * Clears the current auth information saved in local storage by overwriting it
     * with null.
     */
    clearAuthToken(): void {
        this._storeAuthToken(null);
    }

    private _storeAuthToken(value: StoredAuthToken) {
        const success = localStorage.set(AUTH_TOKEN_KEY, value);
        if (!success) {
            PcDiagnostics.Log(
                PcDiagnostics.LogType.Error,
                "AuthStorage.setLocalStorage",
                "Unable to set a value in local storage. This could possibly be due to a QuotaExceededError being thrown."
            );
        }
    }
}
