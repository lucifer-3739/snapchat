import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import connectDatabase from "./lib/db"
import { User } from "./models/user.model";
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOLGE_CLIENT_SECRET,
    })
  ],
  secret:process.env.AUTH_SECRET,

  callbacks:{
    async signIn({account, profile}){
        if(account?.provider === 'google'){
            await connectDatabase();
            try {
                const user = await User.findOne({email:profile?.email})
                if(!user){
                    const newUser = await User.create({
                        username:profile?.login,
                        fullname:profile?.name,
                        email:profile?.email,
                        profilePhoto:profile?.avatar_url,
                    })
                    await newUser.save();
                }
                return true;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
        return false;
    }
  }
})