import React from 'react';
import { MDBIcon } from 'mdbreact';

interface HeaderProps { icon?: string, label: string, val: string | number, mathFont?: boolean }

export const LabeledHeader = ({ icon, label, val, mathFont }: HeaderProps) => (
    <div>
        <MDBIcon icon={icon || ''} />
        <span style={{ marginRight: 10, color: '#777', padding: 2, fontStyle: 'italic' }}>{label}</span>
        <span className={!mathFont ? 'math' : 'step-desc'} style={{ color: '#444', padding: 0 }}>{val}</span>
    </div>
);