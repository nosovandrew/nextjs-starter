// Global types

type NodeJSGlobal = typeof global;

interface CustomNodeJsGlobal extends NodeJSGlobal {
    mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
}