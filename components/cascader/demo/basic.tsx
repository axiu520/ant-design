import React from 'react';
import { Cascader } from 'antd';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'A区',
    label: 'A区',
    children: [
      {
        value: '会议室门禁',
        label: '会议室门禁',
  {
    value: 'B区',
    label: 'B区',
    children: [
      {
        value: '会议室门禁',
        label: '会议室门禁',
        
const onChange = (value: string[]) => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader options={options} onChange={onChange} placeholder="Please select" />
);

export default App;
