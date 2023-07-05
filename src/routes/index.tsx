import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getPages, pagesState } from '../slices/pagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PageComponent } from '../components/PageComponent';
import { AppDispatch } from '../config/store';

export const Routing = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pages } = useSelector(pagesState);

  useEffect(() => {
    dispatch(getPages());
  }, []);

  if (!pages.length) return null;
  return (
    <Router>
      <Routes>
        {pages.map(({ id, url }) => (
          <Route key={id} path={url} element={<PageComponent pageId={id} />} />
        ))}
      </Routes>
    </Router>
  );
};
