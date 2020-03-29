import React, { useState, useEffect } from 'react';
import sleep from './sleep';

export const useUpload = (callOut: any) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    const reader = new FileReader();

    useEffect(() => {
        if (callOut != 0 ) {
            const input: any = document.createElement('input');
            input.type = 'file';
            input.style.visibility = 'hidden';
            setTimeout(() => { input.click() }, 200);
            
            input.onchange = () => {
                setLoading(true);
                const file = input.files[0];
                reader.addEventListener("load", async function () {
                    await sleep(1000);
                    setLoading(false);
                    setData({ path: reader.result });
                }, false);

                if (file) {
                    reader.readAsDataURL(file)
                }
            }
        }
    }, [callOut]);

    return { data, fileIsUplading: loading };
}