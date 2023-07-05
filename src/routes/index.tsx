import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getPages, pagesState } from '../slices/pagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PageView } from '../views/PageView';
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
          <Route key={id} path={url} element={<PageView pageId={id} />} />
        ))}
      </Routes>
    </Router>
  );
};
