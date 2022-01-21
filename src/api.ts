import axios from "axios";

export async function exchangeToken(params: API.ExchangeParams) {
  return axios
    .get<API.ExchangeResponse>(
      `https://graph.facebook.com/oauth/access_token`,
      {
        params: {
          grant_type: "fb_exchange_token",
          ...params,
        },
      }
    )
    .catch((error) => {
      return {
        data: {
          access_token: "",
          error: error
        },
      };
    });
}
