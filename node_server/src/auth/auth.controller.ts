import { Request } from "express";
import { AuthControllerHelper } from "models/controllerModels";
import { RedisClientType } from "redis";
import { BadRequestError } from "../utils/error";
import { AppUtils } from "../utils/utils";
import AuthService from "./auth.service";
import {} from "../../models/models"
import { fetch } from "cross-fetch";
// import grant from "grant"


export default class AuthController implements AuthControllerHelper {
  constructor(
    private readonly authService: AuthService,
    private readonly redis?: RedisClientType
  ) {}

  // isExisting = 

  // signUp = 

  login = async (req: Request) => {
    const { username, password } = req.body;
    if (!username || !password) throw new BadRequestError();
    const result = await this.authService.login(username, password);
    if(result === 0) throw new BadRequestError()
    req.session.userId = result[0].id
    // res.json() == AppUtils.setServerResponse()
    return AppUtils.setServerResponse(); // return {success: true, result: is_password_correct} 
  };

  oauthLogin =  async (req: Request) => {
    const accessToken = req.session?.['grant'].response.access_token;
    console.log(accessToken)

    const fetchRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo',{
        method:"get",
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
    });
    const fetchedUser = await fetchRes.json()
    const {email} = fetchedUser
    const result = await this.authService.oauthLogin(email);

    req.session.userId = result[0].id

    return AppUtils.setServerResponse();
     
  }
}
 