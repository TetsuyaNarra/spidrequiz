import Header from '@/components/header'

const Layout = ({children}) => {
    return (
        <>
        <title>Spidre Quiz</title>
        <Header/>
        {children}
        </>
    );
};

export default Layout;