declare namespace API {
    type ExchangeParams = {
        client_id: string;
        client_secret: string;
        fb_exchange_token: string;
    }
    type ExchangeResponse = {
        access_token: string;
        error: string;
    }
}