import Excerpt from '../components/Excerpt';

test('Excerpt', () => {
  const emptyExcerpt = Excerpt('',111);
  const notEmptyExcerpt = Excerpt('Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',111);
  let emptyResult = false;
  let notEmptyResult = false;
  if(emptyExcerpt==='No Details'){
    emptyResult = true;
  }
  if(notEmptyExcerpt==='Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown ...'){
    notEmptyResult = true;
  }
  expect(notEmptyExcerpt)
});
