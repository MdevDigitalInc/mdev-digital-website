<template>
  <section class="mdev-team-section --section-space">
    <!-- Team Intro -->
    <div class="mdev-main-wrapper flex flex-hor-center flex-vert-center flex-wrap">
      <!-- Main Title -->
      <div class="mdev-team-title">
        <span v-in-viewport class="--subheading u-light u-uppercase a-fade-in-full">
          {{ subheading }}
        </span>
        <h2 v-in-viewport class="u-uppercase a-fade-in-full">
          {{ heading }}
        </h2>
      </div>
      <!-- Copy -->
      <p v-in-viewport class="mdev-team-text a-fade-in-full">
        {{ text }}
      </p>
    </div>
    <!-- Team Photos -->
    <div class="mdev-team mdev-main-wrapper flex flex-hor-between flex-vert-end">
      <router-link v-for="(member, key, index) in members"
        :key="member.id"
        :title="member.linka11y"
        :to="member.route"
        v-in-viewport
        class="--team mdev-member a-rotate-x-r" :class="member.class">
        <!-- Team Picture -->
        <img :src="loadImage(member.image)" :alt="member.a11y" />
        <span class="--name u-uppercase u-bold">
          {{ member.name }}
        </span>
        <span class="--title u-uppercase u-light u-italic">
          {{ member.title }}
        </span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default{
  name: 'TeamSection',

  props: [ 'heading', 'subheading', 'text', 'members' ]
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* Team Section Component Styles
/--------------------------------------*/
.mdev-team-section {
  width: 100%;
  position: relative;
  overflow: hidden;

  &.--section-space {
    margin: 75px 0 150px;

    @media #{$portrait} {
      margin: 50px 0;
    }
  }

  .--subheading {
    font-size: 40px;

    @media #{$tablet-up} {
      font-size: 40px;
    }
  }
}

.mdev-team {
  @media #{$portrait} {
    flex-wrap: wrap;
    margin-top: 50px;
  }
}

.mdev-team-text {
  width: 45%;
}

.mdev-team-title {
  white-space: nowrap;
  width: 48%;

  @media #{$desktop-up} {
    h2 {
      margin-top: 10px;
    }
  }

  @media #{$phone-only} {
    h2 {
      font-size: 45px;
    }
  }
}

.mdev-team-title,
.mdev-team-text {
  padding: 20px;

  @media #{$portrait} {
    width: 100%;
    padding: 0 60px;
  }

  @media #{$phone-only} {
    padding: 0 20px;
  }
}

.mdev-member {
  width: 20%;
  position: relative;

  @media #{$portrait} {
    width: 80%;
    margin: 0 10%;
  }
  @media #{$tablet-prt-only} {
    width: 45%;
    margin: 2%;
  }
  @media #{$phone-only} {
    margin-bottom: 20px;
  }

  .--title {
    font-size: 18px;
    white-space: nowrap;

    @media #{$laptop-only} {
      font-size: 14px;
    }
    @media #{$tablet-lnd-only} {
      font-size: 11px;
    }
  }

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }

  // Green Decorative frame
  &:before {
    @include pseudo();
    border: 4px solid $color-brand-accent;
    z-index: -1;
    top: 50px;
    left: 5%;
    bottom: 110px;
    right: 10%;
  }
}

// Individual Team Decorative Frame
.--luis:before {
  left: -20px;
  right: 15%;
  bottom: 125px;

  @media #{$portrait} {
    left: 5px;
  }
}

.--haly:before {
  right: -15px;
  left: 10%;

  @media #{$portrait} {
    right: 15px;
  }
}

.--graham:before {
  left: 10%;
  right: 12%;
  top: 40px;
}

.--dorian:before {
  top: 35px;
  right: 12%;
  left: 9%;
}
/*--------------------------------------*/
</style>
