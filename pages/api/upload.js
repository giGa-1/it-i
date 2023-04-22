//https://fullstacksoup.blog/2021/11/04/next-js-upload-image-to-public-folder/
import { IncomingForm } from 'formidable'
import mv from 'mv'

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    let resp = await new Promise((resolve, reject) => {
        const form = new IncomingForm();
    
        form.parse(req, async (err, fields, files) => {
            if (err) resolve({code: 500, info: {status: "error occurred", err: err}});


            if(files.file === undefined) {
                resolve({code: 400, info: {status: "no files uploaded", files: files}});
                return;
            }

            let oldPath = files.file.filepath;
            let name = files.file.originalFilename;
            
            //https://www.programiz.com/javascript/examples/generate-random-strings#:~:text=random()%20method%20is%20used,a%20random%20character%20is%20generated.
            let rnd = "_" + Math.random().toString(36).substring(2,7);
            let parts = name.split(".");
            name = parts[0] + rnd + "." + parts[1];

            let newPath = `./public/img/${name}`;
            resolve(await new Promise((res, rej) => 
                mv(oldPath, newPath, (err) => {
                    if(err) {
                        res({code: 500, info: {status: "error occurred", err: err}});
                    } else {
                        res({code: 200, info: {status: "ok", filename: name}});
                    }
                })
            ));
        });
    });

    res.status(resp.code).json(resp.info);
}