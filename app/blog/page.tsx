import BlogPost from '@/components/blog/BlogPost'
import Layout from '@/components/layout/Layout'

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Blog() {
    return (
        <>
            <Layout>
                <BlogPost showItem={6} style={1} showPagination />
            </Layout>
        </>
    )
}
