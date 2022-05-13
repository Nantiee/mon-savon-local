const DefaultLayout = ({ children }) => {
  return (
    <div className='default-layout'>
      {/* Header */}
      <main>
        {children}
      </main>
      {/* Footer */}
    </div>
  )
}

export default DefaultLayout
