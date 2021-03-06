import { useState, useEffect } from 'react';
import sleep from './sleep';
import api from './api';
import { useToasts } from 'react-toast-notifications';

export const useUpload = (callOut: any) => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    
    useEffect(() => {
        const reader = new FileReader();
        if (callOut !== 0 ) {
            const input: any = document.createElement('input');
            input.type = 'file';
            input.style.visibility = 'hidden';
            setTimeout(() => input.click(), 200);
            
            input.onchange = () => {
                setLoading(true);
                const file = input.files[0];
                reader.addEventListener("load", async function () {
                    const encodedImage: any = reader.result;
                    const response: any = await api.imgToText(encodedImage);
                    await sleep(500);
                    if (response.data.error) addToast(response.data.error, { appearance: 'error', autoDismiss: true });
                    else setData({ responseEquation: response.data.equation });
                    setLoading(false);

                }, false);

                if (file) reader.readAsDataURL(file)
            }
        }
    }, [callOut]);

    return { data, fileIsUplading: loading };
}