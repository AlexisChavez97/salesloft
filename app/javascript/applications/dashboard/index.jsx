import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PeopleList from './components/people_list/index'
import CharacterFrequency from './components/CharacterFrequency'

const Dashboard = () => {
  const [people, setPeople] = useState([]);
  const [activeTab, setActiveTab] = useState('peopleList');

  useEffect(() => {
    async function peopleData() {
      const response = await axios.get('/api/v1/people');
      setPeople(response.data.data);
    }
    peopleData();
  }, [] );

  const content = {
    peopleList: <PeopleList people={people}/>,
    counter: <CharacterFrequency people={people}/>,
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
              <li onClick={() => setActiveTab('peopleList')} className={shouldShow('peopleList')}><a>People List</a></li>
              <li onClick={() => setActiveTab('counter')} className={shouldShow('counter')}><a>Characters Frequency</a></li>
              <li onClick={() => setActiveTab('duplicates')} className={shouldShow('duplicates')}><a>Possible email duplicates</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    {content[activeTab]}
  </>
  
};

export default Dashboard;
