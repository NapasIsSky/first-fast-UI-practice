import React from "react";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";

const Index = () => {
    const router = useRouter();
    React.useEffect(() => {
        router.push("/home");
    }, []);

    return null;
};

export default observer(Index);
