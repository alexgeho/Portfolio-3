import { getDict, type Lang } from '@/i18n/dictionaries'
import Hero from '@/components/Hero/Hero'
import BentoAbout from '@/components/BentoAbout/BentoAbout'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import Achievements from '@/components/Achievements/Achievements'
import Experience from '@/components/Experience/Experience'
import Footer from '@/components/Footer/Footer'
import FloatingNav from '@/components/FloatingNav/FloatingNav'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'

export const dynamicParams = false

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang as Lang
  const dict = getDict(lang)

  return (
    <div className="app">
      <main>
        <Hero dict={dict.hero} />
        <BentoAbout dict={dict.bento} />
        <Projects dict={dict.projects} />
        <Skills dict={dict.skills} />
        <Achievements dict={dict.achievements} />
        <Experience dict={dict.experience} />
      </main>
      <Footer dict={dict.footer} />
      <FloatingNav dict={dict.nav} lang={lang} />
      <ScrollReveal />
    </div>
  )
}
