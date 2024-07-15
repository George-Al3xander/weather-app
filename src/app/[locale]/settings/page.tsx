import IntlClientProvider from '@/components/providers/intl-client-provider';
import Settings from '@/components/settings/settings';

function Page({ params }: { params: { locale: string } }) {
    return (
        <IntlClientProvider messagesFrom={'SettingsPage'}>
            <section>
                <Settings {...params} />
            </section>
        </IntlClientProvider>
    );
}

export default Page;
