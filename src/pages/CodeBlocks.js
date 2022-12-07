import axios from 'axios';
import Card from '../components/UI/Card';
import CodeItem from './CodeItem';
import classes from './CodeBlocks.module.css';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

const cookies = new Cookies();

const CodeBlocks = () => {
  const [codeBlocks, setCodeBlocks] = useState([]);

  useEffect(() => {
    const getCodeBlocks = async () => {
      const configuration = {
        method: 'get',
        url: 'https://dan-nodejs-mongodb.herokuapp.com/code-blocks',
        headers: {
          Authorization: `Bearer ${cookies.get('TOKEN')}`,
        },
      };
      const response = await axios(configuration);
      setCodeBlocks(response?.data?.codeBlocksList || []);
    };
    getCodeBlocks();
  }, []);

  const blockList = codeBlocks.map((code) => (
    <CodeItem
      key={code.id}
      id={code.id}
      name={code.name}
      description={code.description}
      price={code.price}
    />
  ));
  return (
    <section className={classes.codes}>
      <Card>
        <ul>{blockList}</ul>
      </Card>
    </section>
  );
};

export default CodeBlocks;
