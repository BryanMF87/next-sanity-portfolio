import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';

type Props = {
    params: { slug: string }
};

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);

    return (
        <>
            <h1 className="">{page.title}</h1>
            <PortableText value={page.content} />
        </>
    )
};