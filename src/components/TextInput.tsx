import toCamelCase from '@/utils/toCamelCase';
import React from 'react';

interface Props {
    label: string;
    isTextArea?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    ref?: React.RefObject<any>;
}

export default function TextInput({ label, isTextArea = false, value = '', onChange = () => { }, ref }: Props) {

    const styles = `text border rounded px-3 py-1 ${isTextArea ? 'resize-none' : ''}`

    const name = toCamelCase(label);

    const id = toCamelCase(label) + 'Id';

    return (
        <>
            <div className="flex flex-col space-y-0">
                <label htmlFor={id} className="text-xs text-stone-600 mb-1">{label}</label>
                {
                    isTextArea ?
                        <textarea ref={ref} name={name} id={id} rows={4} value={value} onChange={e => onChange(e.target.value)} className={styles}></textarea> :
                        <input ref={ref} name={name} id={id} value={value} onChange={e => onChange(e.target.value)} className={styles} />
                }
            </div>
        </>
    )
}