import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './components/people_list/index'

const Dashboard = () => {
  const [people, setPeople] = useState([]);
  const [activeTab, setActiveTab] = useState('peopleList');

  useEffect(() => {
    async function peopleList() {
      const response = await axios.get('/api/v1/people');
      setPeople(response.data.data);
    }
    peopleList();
  }, [] );

  const content = {
    peopleList: <List people={people}/>,
    counter: <p>Counter Tab</p>,
    duplicates: <p>Duplicates Tab</p>
  }

  const shouldShow = tab => {
    if(tab === activeTab)
      return 'is-active'
  }

  return <>
    <section className='hero is-medium is-info'>
      <div className='hero-body'>
        <p className='title' style={{textAlign: 'center'}}>Salesloft people dashboard</p>
      </div>

      <div className='hero-foot'>
        <nav className='tabs is-boxed is-fullwidth'>
          <div className='container'>
            <ul>
              <li onClick={() => setActiveTab('peopleList')} className={shouldShow('peopleList')}><a>List</a></li>
              <li onClick={() => setActiveTab('counter')} className={shouldShow('counter')}><a>Possible email duplicates</a></li>
              <li onClick={() => setActiveTab('duplicates')} className={shouldShow('duplicates')}><a>Letters counter</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    {content[activeTab]}
  </>
  
};

export default Dashboard;
