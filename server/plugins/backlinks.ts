import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('content:file:afterParse', (file) => {
        if (file._id.endsWith('.md')) {
            visit(file.body, (n: any) => n.tag === 'a', (node) => {

                if (file.outgoingLinks === undefined) file.outgoingLinks = [];

                file.outgoingLinks.push({
                    _to: node.props.href,
                    _title: node.children.find((c: any) => c.type === "text")?.value,
                    node
                });

            })
        }
    })
})
