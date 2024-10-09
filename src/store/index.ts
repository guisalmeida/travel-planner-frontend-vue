import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export type Participant = {
  id?: string
  name?: string
  email?: string
  is_confirmed?: boolean
  is_owner?: boolean
  trip_id?: string
}

export type Link = {
  id: string
  title: string
  url: string
  trip_id: string
}

export type Activity = {
  id: string
  title: string
  occurs_at: string
  trip_id: string
}

export type Trip = {
  id: string
  participants: Participant[]
  destination: string
  ownerName: string
  ownerEmail: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
  links: Link[]
  activities: Activity[]
}

type RootState = {
  currentTrip: Trip
}

export const store = createStore<RootState>({
  state() {
    return {
      currentTrip: {
        id: '',
        participants: [],
        destination: '',
        ownerName: '',
        ownerEmail: '',
        starts_at: '',
        ends_at: '',
        is_confirmed: false,
        links: [],
        activities: []
      }
    }
  },
  mutations: {
    updateTrip(state, trip: Trip) {
      state.currentTrip = { ...state.currentTrip, ...trip }
    },
    addParticipant(state, participant: Participant) {
      state.currentTrip.participants.push(participant)
    },
    removeParticipant(state, participantId: string) {
      state.currentTrip.participants = state.currentTrip.participants.filter(
        (participant) => participant.id !== participantId
      )
    },
    setStartDate(state, newDate: string) {
      state.currentTrip.starts_at = newDate
    },
    setEndDate(state, newDate: string) {
      state.currentTrip.ends_at = newDate
    },
    addLink(state, link: Link) {
      state.currentTrip.links.push(link)
    },
    removeLink(state, linkId: string) {
      state.currentTrip.links = state.currentTrip.links.filter((link) => link.id !== linkId)
    },
    addActivity(state, activity: Activity) {
      state.currentTrip.activities.push(activity)
    },
    removeActivity(state, activityId: string) {
      state.currentTrip.activities = state.currentTrip.activities.filter(
        (activity) => activity.id !== activityId
      )
    }
  },
  getters: {
    formatedDateRange(state) {
      if (!state.currentTrip.starts_at || !state.currentTrip.ends_at) {
        return 'Quando?'
      }

      const startDate = new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(new Date(state.currentTrip.starts_at))

      const endDate = new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(new Date(state.currentTrip.ends_at))

      return `${startDate} - ${endDate}`
    }
  }
})

export const key: InjectionKey<Store<RootState>> = Symbol()

/**
 * overriding the function to use typed store.
 * @doc https://vuex.vuejs.org/guide/typescript-support.html#simplifying-usestore-usage
 */

export function useStore() {
  return baseUseStore(key)
}
