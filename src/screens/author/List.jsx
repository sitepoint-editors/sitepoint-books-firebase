import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import AuthorList from '../../components/author/List'

function ScreenAuthorList() {
  return (
    <>
      <PageHeading title="Author List" />
      <div className="mt-12">
        <AuthorList />
      </div>
    </>
  )
}

export default ScreenAuthorList
