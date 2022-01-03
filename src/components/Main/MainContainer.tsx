import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { useModal } from '../../hooks/useModal';
import Main from './Main';
import MainModal from './components/MainModal/MainModal';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCoinsForMainAC } from '../redux/mainReducer';
import { testSelector } from '../redux/selectors';

const MainContainer = () => {

  const {pageNumber} = useParams()

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/assets?limit=5&offset=${(Number(pageNumber) - 1)*5}`).then(response => {
      dispatch(setCoinsForMainAC(response.data.data))
    })
  }, [pageNumber])


  const state = useSelector(testSelector)
  // let currenPage = state.main.currentPage 


  // const onPageChanged = (currenPage: number) => {
  //   dispatch(setCurrentPageAC(currenPage))
  //   axios.get(`https://api.coincap.io/v2/assets?limit=5&offset=${currenPage*5}`).then(response => {
  //     dispatch(setCoinsForMainAC(response.data.data))
  //   })
  // }

  const handlePrevClick = () => {
    if (Number(pageNumber) > 1) {
      history.push(Number(pageNumber) - 1)
    }
  }

  const handleNextClick = () => {
    history.push(pageNumber + "1")
  }


  const [modalOpen, openModal, closeModal] = useModal({ defaultOpen: false });
  return (
    <>
      <Main state={state}
        openModal={openModal}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        /* currenPage={currenPage} */ 
        pageNumber={pageNumber}/>
      <MainModal open={modalOpen} onClose={closeModal} />
    </>
  );
};

export default React.memo(MainContainer);