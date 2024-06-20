import TypographyH1 from "@/components/typography/TypographyH1.tsx";
import {ProfileEdit, UserInfo, UserPosts} from "@/components/profile";
import getUser from "@/hooks/user/getUser.ts";
import TypographyP from "@/components/typography/TypographyP.tsx";

function ProfilePage() {
    const {data, isError, error} = getUser()

    return <>
        {isError && <TypographyP isDanger={true} text={error.message}/>}
        {data && <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <div className={'col-span-1'}><TypographyH1 text={'User Information'}/></div>
            <div className={'col-span-1 justify-self-end'}><ProfileEdit username={data?.username} email={data?.email}/>
            </div>
            <div className="col-span-1">
                <UserInfo username={data?.username} email={data?.email}/>
            </div>
            <div className="col-start-1">
                <UserPosts/>
            </div>
        </div>}

    </>
}

export default ProfilePage;